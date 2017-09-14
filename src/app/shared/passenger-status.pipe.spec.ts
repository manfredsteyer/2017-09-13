import { PassengerStatusPipe } from './passenger-status.pipe';

describe('PassengerStatusPipe', () => {
  it('create an instance', () => {
    const pipe = new PassengerStatusPipe();
    expect(pipe).toBeTruthy();
  });
});
