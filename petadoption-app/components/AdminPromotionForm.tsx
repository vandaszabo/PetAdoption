'use client'
import React from 'react';
import { useState } from 'react';
import { useSession } from 'next-auth/react';

const AdminPromotionForm = () => {

  const [userId, setUserId] = useState<string>('');
  const { data: session } = useSession();

  const promoteUser = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/promote-to-admin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            // Attach session token
            'Authorization': `Bearer ${session?.user?.token}`, 
        },
        body: JSON.stringify({ userId }),
      });

      const result = await response.json();
      
      if (response.ok) {
        alert(result.message);
      } else {
        alert(result.message || 'An error occurred');
      }
    } catch (error) {
      alert('An error occurred');
    }
  };

  if (!session || session.user?.role !== 'admin') {
    return <p>You do not have permission to view this page</p>;
  }

  return (
    <form onSubmit={promoteUser}>
      <input
        type="text"
        value={userId}
        onChange={(e) => setUserId(e.target.value)}
        placeholder="Enter User ID"
        required
      />
      <button type="submit" disabled={!userId}>Promote to Admin</button>
    </form>
  );
};

export default AdminPromotionForm;
