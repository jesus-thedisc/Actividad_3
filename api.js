const BASE_URL =  'https://api-items-icel-production.up.railway.app';



export async function getAllItems() {
  const response = await fetch(`${BASE_URL}/items`);

  if (!response.ok) {
    throw new Error('No se pudieron cargar los elementos');
  }

  return await response.json();
}