import { typesStates } from "../types/types";

const initial = {
  status: "idle",
};

export const status = (state = initial, action) => {
  switch (action.type) {
    case typesStates.PENDING:
      return { status: "pending" };
    case typesStates.SUCCEDED:
      return { status: "succeded" };
    case typesStates.ERROR:
      return { status: "rejected" };
    default:
      return status;
  }
};
