import DeliveryType from '../models/deliveryType';

const deliveryType = [
  { id: 1, type: 'C', label: 'Collection' },
  { id: 2, type: 'D', label: 'Delivery' }
];

export default deliveryType;

export async function syncData() {
  await Promise.all(
    deliveryType.map(async dtData => {
      await DeliveryType.create(dtData);
    })
  );
}
