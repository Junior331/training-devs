// Função auxiliar para retornar um caractere aleatório de uma string fornecida
const getRandomCharacter = (characters: string): string => {
  const randomIndex = Math.floor(Math.random() * characters.length);
  return characters[randomIndex];
};

// Função para gerar uma senha aleatória, com pelo menos um caractere de cada tipo
export const generatePassword = (length: number = 8): string => {
  const charSets = {
    numbers: "0123456789",
    specialCharacters: "!@#$%&*",
    lowerCase: "abcdefghijklmnopqrstuvwxyz",
    upperCase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  };

  // Garante que a senha tenha pelo menos um caractere de cada tipo
  const password = [
    getRandomCharacter(charSets.numbers),
    getRandomCharacter(charSets.specialCharacters),
    getRandomCharacter(charSets.lowerCase),
    getRandomCharacter(charSets.upperCase),
  ];

  // Preenche o restante da senha com caracteres aleatórios
  const remainingLength = length - password.length;
  const allCharacters = Object.values(charSets).join("");

  // Adiciona caracteres aleatórios até o comprimento da senha
  for (let i = 0; i < remainingLength; i++) {
    password.push(getRandomCharacter(allCharacters));
  }

  return password.join("");
};
