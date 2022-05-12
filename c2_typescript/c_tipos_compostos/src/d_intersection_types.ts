type Users = {
  name: string;
  lastName: string;
  birthDay: string;
  age?: number;
};

type About = {
  bio: string;
  interests: string[];
};

type Profile = Users & About;

const USERS_WITH_PROFILE: Profile = {
  name: "Bruno",
  lastName: "Seghese",
  birthDay: "13/04/1981",
  age: 41,
  bio: "Developer",
  interests: ["imóvel", "carro", "viagem"],
};

/* type LogLevels = "info" | "error" | "debug";

type ComposedProfile = Users & {
  log: LogLevels;
};

const USERS_COMPOSED_PROFILE: ComposedProfile = {
  name: "Bruno",
  lastName: "Seghese",
  birthDay: "13/04/1981",
  log: "info",
}; */
