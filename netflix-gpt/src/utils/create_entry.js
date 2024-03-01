import { AWS_USER_ENTRY_URL } from "./urls";

const create_entry = async (uid) => {
  try {
    const response = await fetch(
        AWS_USER_ENTRY_URL,
      {
        method: "POST",
        body: JSON.stringify({ uid: uid }),
      }
    );
  } catch (error) {
    console.error("Error creating database entry : ", error);
  }
};

export default create_entry;
