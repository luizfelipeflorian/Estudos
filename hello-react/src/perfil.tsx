type ProfileCardProps = {
    name: string;
    avatarUrl: string;
    role: string;
}

export function ProfileCard(props: ProfileCardProps) {
    console.log(props)
    return (
        <>
            <div className="card bg-base-100 h-max p-2 w-96 shadow-2xl shadow-yellow-500 flex flex-col justify-center items-center">
                <figure >
                    <img className="rounded-full object-cover" src= {props.avatarUrl} alt="Avatar" />
                </figure>
                <div className="card-body">
                    <h1 className="text-3xl text-yellow-950 font-bold">{props.name}</h1>
                    <h2 className="text-2xl text-yellow-800">{props.role}</h2>
                </div>
            </div>
        </>
    )
}