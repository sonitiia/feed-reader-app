import { Button, Stack, TextField, Typography } from "@mui/material";
import { useForm } from "react-hook-form";
import useAuth from "../../auth/useAuth";
import { useNavigate } from "react-router-dom";
import { FEEDS_ROUTE } from "../../app/Routes";

const LoginForm = () => {
	const {
		register,
		handleSubmit,
		setError,
		formState: { errors },
	} = useForm({
		mode: "onBlur",
	});

	const { login } = useAuth();

	const navigate = useNavigate();

	const onSubmit = async (data) => {
		try {
			const user = login(data);
			if (user) {
				navigate(FEEDS_ROUTE);
			} else {
				setError("email", {
					type: "invalidCredentials",
					message: "Invalid credentials.",
				});
				setError("password", {
					type: "invalidCredentials",
					message: "Invalid credentials.",
				});
			}
		} catch (err) {
			setError("email", {
				type: "invalidCredentials",
				message: "Invalid credentials.",
			});
			setError("password", {
				type: "invalidCredentials",
				message: "Invalid credentials.",
			});
		}
	};

	return (
		<Stack component="form" onSubmit={handleSubmit(onSubmit)} gap={4}>
			<Typography variant="h4" fontWeight="bold">
				Login form
			</Typography>
			<TextField
				label="Email address"
				{...register("email", {
					required: {
						value: true,
						message: "Field is required!",
					},
					maxLength: {
						value: 100,
						message: "Max length is 100 symbols!",
					},
					pattern: {
						value: /[A-Za-z0-9._%+-]{3,}@[A-Za-z0-9.-]{2,}\.[A-Z|a-z]{2,}/,
						message: "Enter a valid email!",
					},
				})}
				helperText={errors?.email ? errors.email.message : " "}
				error={!!errors?.email}
			/>
			<TextField
				label="Password"
				{...register("password", {
					required: {
						value: true,
						message: "Field is required!",
					},
					minLength: {
						value: 8,
						message: "Min length is 8 symbols!",
					},
					maxLength: {
						value: 32,
						message: "Max length is 32 symbols!",
					},
					pattern: {
						value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_])[a-zA-Z\d\W_]+$/,
						message:
							"Enter a valid password! Password should contain at least one capital letter, one small letter, one digit, and one special symbol",
					},
				})}
				helperText={errors?.password ? errors.password.message : " "}
				error={!!errors?.password}
			/>

			<Button variant="contained" type="submit">
				Login
			</Button>
		</Stack>
	);
};

export default LoginForm;
