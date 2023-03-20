import PocketBase from 'pocketbase';
const pb = new PocketBase('http://127.0.0.1:8090');
export default pb;
pb.autoCancellation(false);

export async function getInventory() {
  const inventory = await pb.collection('inventory').getFullList();
  return inventory;
}