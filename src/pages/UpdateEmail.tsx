import React, { useState } from 'react';
import Input from '../components/Input';
import { updateUserEmail } from '../api/users';

export default function UpdateEmail() {
  const [userId, setUserId] = useState('');
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!userId) {
      setError('User ID is required');
      return;
    }
    
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setError('Valid email is required');
      return;
    }
    
    setIsSubmitting(true);
    try {
      await updateUserEmail(userId, email);
      setEmail('');
      setUserId('');
      alert('Email updated successfully');
    } catch (error) {
      setError('Failed to update email');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-6">Update User Email</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
        <Input
          label="User ID"
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <Input
          label="New Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
        >
          {isSubmitting ? 'Updating...' : 'Update Email'}
        </button>
      </form>
    </div>
  );
}