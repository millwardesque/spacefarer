export type EVENT_TYPE = 'clock:time-change';

export function eventSubscribe(
  eventName: EVENT_TYPE,
  onEvent: (payload: any) => void
): void {
  document.addEventListener(eventName, onEvent);
}

export function eventUnsubscribe(
  eventName: EVENT_TYPE,
  onEvent: (payload: any) => void
): void {
  document.removeEventListener(eventName, onEvent);
}

export function eventTrigger(eventName: EVENT_TYPE, payload: any): void {
  document.dispatchEvent(new CustomEvent(eventName, payload));
}
