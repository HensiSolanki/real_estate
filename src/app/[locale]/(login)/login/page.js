"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import LoginCityBackdropSvg from "@/assets/LoginCityBackdropSvg.svg";
import { FormProvider } from "@/components/hook-form";
import { loginSchema } from "@/schemas/authSchema";
import { useForm } from "react-hook-form";
import Header from "@/components/Header/Header";
import Footer from "@/components/footer/index";
import {
  BrandIcon,
  BrandName,
  BrandRow,
  BrandSubtext,
  CityBackdrop,
  DividerRow,
  ErrorText,
  Input,
  Label,
  LoginCard,
  LoginShell,
  PrimaryButton,
  StatBox,
  StatLabel,
  StatsRow,
  StatValue,
  Subtitle,
  Title,
} from "./style";

const LoginPage = () => {
  const methods = useForm({
    resolver: yupResolver(loginSchema),
    defaultValues: {
      fullName: "",
      mobileNumber: "",
      password: "",
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = methods;

  const onSubmit = (data) => {
    console.log("Login form payload:", data);
  };

  return (
    <>
    <Header/>
    
    <LoginShell>
      <CityBackdrop aria-hidden>
        <LoginCityBackdropSvg />
      </CityBackdrop>

      <LoginCard>
        <BrandRow>
          <BrandIcon>🏠</BrandIcon>
          <div>
            <BrandName>Property 973</BrandName>
            <BrandSubtext>Saudi&apos;s trusted property platform</BrandSubtext>
          </div>
        </BrandRow>

        <Title>Log in or create account</Title>
        <Subtitle>Welcome back - sign in to continue</Subtitle>

        <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
          <Label htmlFor="fullName">Full name</Label>
          <Input
            id="fullName"
            placeholder="Enter your full name"
            {...register("fullName")}
            aria-invalid={Boolean(errors.fullName)}
          />
          {errors.fullName && <ErrorText>{errors.fullName.message}</ErrorText>}

          <Label htmlFor="mobileNumber">Mobile number</Label>
          <Input
            id="mobileNumber"
            placeholder="+966  Mobile number"
            {...register("mobileNumber")}
            aria-invalid={Boolean(errors.mobileNumber)}
          />
          {errors.mobileNumber && <ErrorText>{errors.mobileNumber.message}</ErrorText>}

          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            placeholder="••••••••"
            {...register("password")}
            aria-invalid={Boolean(errors.password)}
          />
          {errors.password && <ErrorText>{errors.password.message}</ErrorText>}

          <PrimaryButton type="submit">Send OTP</PrimaryButton>
        </FormProvider>
        <DividerRow />

        <StatsRow>
          <StatBox>
            <StatValue>50K+</StatValue>
            <StatLabel>Listings</StatLabel>
          </StatBox>
          <StatBox>
            <StatValue>12K+</StatValue>
            <StatLabel>Verified agents</StatLabel>
          </StatBox>
          <StatBox>
            <StatValue>4.8/5★</StatValue>
            <StatLabel>Trust rating</StatLabel>
          </StatBox>
        </StatsRow>
      </LoginCard>
    </LoginShell>
    <Footer/>
    </>
  );
};

export default LoginPage;