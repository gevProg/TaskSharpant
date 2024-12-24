import React, { useState, useCallback } from 'react';
import { debounce } from 'lodash';
import Input from '../components/Input';
import { updateUserAllergies, getUser } from '../api/users';

export default function UpdateAllergies() {
  const [userId, setUserId] = useState('');
  const [allergies, setAllergies] = useState<string[]>([]);
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const fetchUserAllergies = useCallback(
    debounce(async (id: string) => {
      if (!id) return;
      
      setIsLoading(true);
      try {
        const user = await getUser(id);
        setAllergies(user.allergies);
        setError('');
      } catch (error) {
        setError('Failed to fetch user allergies');
      } finally {
        setIsLoading(false);
      }
    }, 500),
    []
  );

  const handleUserIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newUserId = e.target.value;
    setUserId(newUserId);
    if (newUserId) {
      fetchUserAllergies(newUserId);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!userId) {
      setError('User ID is required');
      return;
    }
    
    setIsSubmitting(true);
    try {
      await updateUserAllergies(userId, allergies);
      alert('Allergies updated successfully');
    } catch (error) {
      setError('Failed to update allergies');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-6">Update Allergies</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
        <Input
          label="User ID"
          type="text"
          value={userId}
          onChange={handleUserIdChange}
        />
        <Input
          label="Allergies (comma-separated)"
          type="text"
          value={allergies}
          onChange={(e) => setAllergies(e.target.value.split(',').map(s => s.trim()))}
          disabled={isLoading}
        />
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button
          type="submit"
          disabled={isSubmitting || isLoading}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
        >
          {isSubmitting ? 'Updating...' : 'Update Allergies'}
        </button>
      </form>
    </div>
  );
}