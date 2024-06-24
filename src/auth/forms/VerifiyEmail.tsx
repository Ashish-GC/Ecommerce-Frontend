import classes from "./Register.module.css";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Link, useNavigate, useParams } from "react-router-dom";
import { verifyUserEmailQuery } from "@/lib/react-query/queriesAndMutation";
import { toast } from "@/components/ui/use-toast";
import { Loader2 } from "lucide-react";


function VerifyEmail() {

  const navigate = useNavigate()
 
   const {username} =  useParams();

  const {mutateAsync,isPending,error,isError} = verifyUserEmailQuery()

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
     verifyCode: "",
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {

       const response = await mutateAsync({verifyCode:data.verifyCode,username})

        if(!response){
          throw new Error("unable to verify user")
        }

         toast({
          title: "Email verified successfully",
         })

          form.reset();
          navigate("/my-account/login")
  }


  return (
    <>
     
      <h1 className="mt-2 text-base text-center md:text-2xl  font-semibold">
       Verification
      </h1>
      <div className={classes.main}>
        <h1 className="mt-3 mb-3 text-center text-[0.8rem] md:text-[1rem] font-semibold">
           enter verification code
        </h1>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className={classes.form}>
            <FormField
              control={form.control}
              name="verifyCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    <p className="text-sm md:text-base">
                     verifyCode 
                    </p>
                  </FormLabel>
                  <FormControl>
                    <input
                      type="text"
                      className={classes.input}
                      // placeholder="enter your  email"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className="bg-red-400 hover:bg-red-500 text-white"
              type="submit"
            >
               {!isPending && "Verify Email"} 
             {isPending && <Loader2/>}
            </Button>
          </form>
        </Form>

        <div className="mt-1">
          <p className="text-gray-500 text-xs md:text-sm">
            Already got an account ?
            <Link
              to="/my-account/login"
              className="underline hover:text-red-500 ml-1"
            >
              Sign in here
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default VerifyEmail;


const FormSchema = z.object({
  verifyCode: z.string().min(6,{ message: "Enter a valid verification code." }),
});
