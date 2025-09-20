import { ProfileCard } from "./perfil";
import { users } from "./dados";

export function CardList() {
    return (
        <>
            <section className="flex flex-col justify-center gap-1">
                {
                    users.map((user) => {
                        return <ProfileCard
                            name={user.name.first}
                            role={user.email}
                            avatarUrl={user.picture.thumbnail}
                        />
                    })
                }
            </section>
        </>
    )
}