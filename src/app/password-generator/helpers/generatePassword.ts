const CHARACTERS = {
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numbers: '1234567890',
  symbols: '!@#$%^&*()_+-={}[];<>:',
};

export function calculateStrength({
  length = 4,
  uppercase = true,
  numbers = true,
  symbols = true,
}: {
  length: number;
  uppercase: boolean;
  numbers: boolean;
  symbols: boolean;
}): number {
  let strength = 0;

  if (length >= 12) strength += 1;
  if (uppercase) strength += 1;
  if (numbers) strength += 1;
  if (symbols) strength += 1;

  return strength;
}

export default function generatePassword(options?: {
  length?: number;
  uppercase?: boolean;
  numbers?: boolean;
  symbols?: boolean;
}): string {
  const length = options?.length || 12;
  const uppercase = options?.uppercase || true;
  const numbers = options?.numbers || true;
  const symbols = options?.symbols || false;

  let password = '';
  let dictionary = CHARACTERS['lowercase'];

  if (!options) {
    dictionary += CHARACTERS['uppercase'];
    dictionary += CHARACTERS['numbers'];
  }
  if (uppercase) {
    dictionary += CHARACTERS['uppercase'];
  }
  if (numbers) {
    dictionary += CHARACTERS['numbers'];
  }
  if (symbols) {
    dictionary += CHARACTERS['symbols'];
  }

  for (let i = 0; i < length; i++) {
    const pos = Math.floor(Math.random() * dictionary.length);
    password += dictionary[pos];
  }

  return password;
}
