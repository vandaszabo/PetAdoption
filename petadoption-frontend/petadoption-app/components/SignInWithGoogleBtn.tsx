'use client'
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";

const SignInWithGoogleButton = () => {
    const router = useRouter();
    
    const handleClick = async () => {
        const result = await signIn('google', { redirect: false });
        if (result?.error) {
            console.error('Sign-in error:', result.error);
        } else {
            router.push('/');
        }
    };

    return (
        <button
            type="button"
            className="login-with-google-btn"
            onClick={handleClick}>
            Sign in with Google
        </button>
    );
};

export default SignInWithGoogleButton;
