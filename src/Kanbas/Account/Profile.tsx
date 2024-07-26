import * as client from "./client";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";

export default function Profile() {
    const [profile, setProfile] = useState<any>({});
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const fetchProfile = async () => {
        try {
            const account = await client.profile();
            setProfile(account);
        } catch (err: any) {
            navigate("/Kanbas/Account/Signin");
        }
    };
    const signout = async () => {
        await client.signout();
        dispatch(setCurrentUser(null));

        navigate("/Kanbas/Account/Signin");
    };

    const updateProfile = async () => {
        await client.updateProfile(profile)
    };

    useEffect(() => {
        fetchProfile();
    }, []);
    return (
        <div>
            <h1>Profile</h1>
            {profile && (
                <div className="col-6">
                    <input
                        value={profile.username}
                        onChange={(e) =>
                            setProfile({...profile, username: e.target.value})
                        }
                        className="form-control mb-2"
                        placeholder="username"
                        title="Username"
                    />
                    <input
                        value={profile.password}
                        onChange={(e) =>
                            setProfile({...profile, password: e.target.value})
                        }
                        className="form-control mb-2"
                        title="Password"
                    />
                    <input
                        value={profile.firstName}
                        onChange={(e) =>
                            setProfile({...profile, firstName: e.target.value})
                        }
                        className="form-control mb-2"
                        placeholder="John"
                        title="First Name"
                    />
                    <input
                        value={profile.lastName}
                        onChange={(e) =>
                            setProfile({...profile, lastName: e.target.value})
                        }
                        className="form-control mb-2"
                        placeholder="Doe"
                        title="Last Name"
                    />
                    <input
                        value={profile.dob}
                        onChange={(e) => setProfile({...profile, dob: e.target.value})}
                        type="date"
                        className="form-control mb-2"
                        title="Date of Birth"
                    />
                    <input
                        value={profile.email}
                        onChange={(e) => setProfile({...profile, email: e.target.value})}
                        className="form-control mb-2"
                        placeholder="example@email.com"
                        title="Email"
                    />
                    <select
                        value={profile.role}
                        onChange={(e) => setProfile({...profile, role: e.target.value})}
                        className="form-control mb-2"
                        title="Role"
                    >
                        <option value="USER">User</option>
                        {" "}
                        <option value="ADMIN">Admin</option>
                        <option value="FACULTY">Faculty</option>
                        {" "}
                        <option value="STUDENT">Student</option>
                    </select>
                </div>
            )}
            <button onClick={updateProfile} className="float-start btn btn-primary">
                Update details
            </button>
            <button onClick={signout} className="float-start btn btn-danger">
                Sign out
            </button>
        </div>
    );
};