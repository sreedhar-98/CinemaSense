
const create_entry = async (uid, trigger_create_user) => {
  try {
    const { isError } = await trigger_create_user({ uid: uid });
    if (isError) {
      console.error("Error creating db entry : ");
    }
  } catch (error) {
    console.error("Error creating database entry : ", error);
  }
};

export default create_entry;
