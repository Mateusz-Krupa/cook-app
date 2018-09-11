import DeliveryState from 'deliverySate';


const RootStore = types.model({
  users: types.map(User),
  deliveries: types.optional(types.map(DeliveryState), {}),
}).views(self => ({
  get getDeliveries() {
      return self.deliveries;
  }
})).actions(self => {

  function addDelivery(deliveryObject) {
      self.deliveries.set(deliveryObject.id, Todo.create(deliveryObject))
  }

  function cancelDelivery(deliveryObject) {
    console.log("call the API and update")
  }
  return {addDelivery, cancelDelivery}
});