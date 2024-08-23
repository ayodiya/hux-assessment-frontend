function greetUser(name: string): string {
  const currentDate: Date = new Date();
  const hours: number = currentDate.getHours();
  const minutes: number = currentDate.getMinutes();
  const formattedMinutes: string =
    minutes < 10 ? `0${minutes}` : minutes.toString();
  const isPM: boolean = hours >= 12;
  const hourIn12Format: number = hours % 12 || 12; // Convert to 12-hour format

  let greeting: string;

  if (hours < 12) {
    greeting = "Good morning";
  } else if (hours < 18) {
    greeting = "Good afternoon";
  } else {
    greeting = "Good evening";
  }

  const timeSuffix: string = isPM ? "PM" : "AM";
  const formattedTime: string = `${hourIn12Format}:${formattedMinutes}${timeSuffix}`;

  return `${greeting}, ${name}. The time is ${formattedTime}.`;
}

export default greetUser;
