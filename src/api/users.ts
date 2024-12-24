const API_BASE_URL = 'http://localhost:5173';

// export async function createUser(userData) {
//   const response = await fetch(`${API_BASE_URL}/users`, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(userData),
//   });
  
//   if (!response.ok) {
//     throw new Error('Failed to create user');
//   }
  
//   return response.json();
// }

export async function getUser(userId: string) {
  const response = await fetch(`${API_BASE_URL}/users/`);
  
  
  if (!response.ok) {
    throw new Error('Failed to fetch user');
  }
  
  return response.json();
}

export async function updateUserEmail(userId: string, email: string) {
  const response = await fetch(`${API_BASE_URL}/updateUserEmail/${userId}`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  });
  
  if (!response.ok) {
    throw new Error('Failed to update email');
  }
  
  return response.json();
}

export async function updateUserPhone(userId: string, phone: string) {
  const response = await fetch(`${API_BASE_URL}/updateUserPhone/${userId}/`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ phone }),
  });
  
  if (!response.ok) {
    throw new Error('Failed to update phone');
  }
  
  return response.json();
}

export async function updateUserAllergies(userId: string, allergies: string[]) {
  const response = await fetch(`${API_BASE_URL}/updateUserAllergies/${userId}/`, {
    method: 'put',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ allergies }),
  });
  
  if (!response.ok) {
    throw new Error('Failed to update allergies');
  }
  
  return response.json();
}



