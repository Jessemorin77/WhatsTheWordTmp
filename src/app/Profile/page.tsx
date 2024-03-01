import { getProfileData } from "../_data-access/profile"

export default async function Profile(){
    const profile = await getProfileData();
    return(
        <div>
            <h1>Profile</h1>
            {profile?.name}
        </div>
    )
}