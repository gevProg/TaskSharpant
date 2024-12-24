import React, { useState } from 'react';
import Input from '../components/Input';
import { updateUserPhone } from '../api/users';

export default function UpdatePhone() {
  const [userId, setUserId] = useState('');
  const [phone, setPhone] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    
    if (!userId) {
      setError('User ID is required');
      return;
    }
    
    if (!phone || !/^\d{6,}$/.test(phone)) {
      setError('Phone number must have at least 6 digits');
      return;
    }
    
    setIsSubmitting(true);
    try {
      await updateUserPhone(userId, phone);
      setPhone('');
      setUserId('');
      alert('Phone number updated successfully');
    } catch (error) {
      setError('Failed to update phone number');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-2xl font-bold mb-6">Update Phone Number</h1>
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6">
        <Input
          label="User ID"
          type="text"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <Input
          label="New Phone Number"
          type="tel"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
        >
          {isSubmitting ? 'Updating...' : 'Update Phone'}
        </button>
      </form>
    </div>
  );
}