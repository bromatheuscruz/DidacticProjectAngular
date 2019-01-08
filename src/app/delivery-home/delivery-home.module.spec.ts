import { DeliveryHomeModule } from './delivery-home.module';

describe('DeliveryHomeModule', () => {
  let deliveryHomeModule: DeliveryHomeModule;

  beforeEach(() => {
    deliveryHomeModule = new DeliveryHomeModule();
  });

  it('should create an instance', () => {
    expect(deliveryHomeModule).toBeTruthy();
  });
});
