export const createUsersWithMessages = async (models) => {
    const { User, Message } = models;

    const firstMessage = new Message();
    firstMessage.message = "Silna Polska";
    await firstMessage.save();

    const secondMessage = new Message();
    secondMessage.message = "Tylko Palikot";
    await secondMessage.save();

    const user = new User();
    user.username = "Janusz";
    user.email = "jani@wp.pl";
    user.password = "haslo";
    user.role = "ADMIN";
    user.messages = [firstMessage, secondMessage];
    user.save();
}
