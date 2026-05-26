import { prismaClient } from "@repo/db";

export default async function Home() {
    const user = await prismaClient.user.findFirst();

    return (
        <div>
            production-username:- {user?.username}
            production-password:-{user?.password}
        </div>
    );
}