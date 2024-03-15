import { JOBTYPES } from "@/constants";
import { z } from "zod";

export const addNewLookup = z.object({
  code: z.string({ required_error: "code is required" }),
  description: z.string({ required_error: "Position is required" }),
  lookupCode: z.string({ required_error: "Instagram is required" }),
  value1: z.number().optional(),
  value2: z.number().optional(),
  value3: z.number().optional(),
  value4: z.number().optional(),
  displayLookup: z.string({ required_error: "Display is required" }),
});

export const addNewDocument = z.object({
  company: z.string({ required_error: "Company is required" }),
  code: z.string({ required_error: "code is required" }),
  description: z.string({ required_error: "Position is required" }),
  prefix: z.string({ required_error: "Prefix is required" }),
  sufix: z.string({ required_error: "Sufix is required" }),
  lengthNumber: z.number().optional(),
  resetBy: z.string().optional(),
});

export const addNewDetailDocument = z.object({
  period: z.string({ required_error: "Period is required" }),
  lastNumber: z.number({ required_error: "Last is required" }),
});

export const addNewPeriod = z.object({
  company: z.string({ required_error: "Company is required" }),
  fiskalYear: z.number({ required_error: "Fiskal Year is required" }),
  period: z.string({ required_error: "Period is required" }),
  noPeriod: z.number({ required_error: "No. Period is required" }),
  startDate: z.date({ required_error: "Date is required" }),
  endDate: z.date({ required_error: "Date is required" }),
  status: z.string({ required_error: "Date is required" }),
  statusFiskal: z.string({ required_error: "Date is required" }),
});

export const jobFormSchema = z.object({
  roles: z
    .string({ required_error: "Job Title is required" })
    .min(3, { message: "Job Title must be at least 3 characters" }),
  jobType: z.enum(JOBTYPES, {
    required_error: "You need to select a job type",
  }),
  salaryFrom: z.string({ required_error: "Salary From is required" }),
  salaryTo: z.string({ required_error: "Salary To is required" }),
  categoryId: z.string({ required_error: "You need to select a category" }),
  requiredSkills: z
    .string()
    .array()
    .nonempty({ message: "Required Skill must be at least 1 skill" }), // typenya string, array dan nonempty
  jobDescription: z
    .string({ required_error: "Job Description is required" })
    .min(10, { message: "Job Description must be at least 10 characters" }),
  responsibility: z
    .string({ required_error: "Responsibilities is required" })
    .min(10, {
      message: "Responsibilities must be at least 10 characters",
    }),
  whoYouAre: z
    .string({ required_error: "Who You Are is required" })
    .min(10, { message: "Who You Are must be at least 10 characters" }),
  niceToHaves: z
    .string({ required_error: "Nice-To-Haves is required" })
    .min(10, { message: "Nice-To-Haves must be at least 10 characters" }),
  benefits: z
    .object({
      benefit: z.string(),
      description: z.string(),
    }) // benefit typenya object yg berisi benfit dan description
    .array()
    .nonempty({ message: "Benefits must be at least 1 benefit" }), // typenya array dan nonempty (gaboleh kosong)
});

export const overviewFormSchema = z.object({
  image: z.any(),
  name: z.string({ required_error: "Name is required" }),
  website: z.string({ required_error: "Website is required" }),
  location: z.string({ required_error: "Location is required" }),
  employee: z.string({ required_error: "Employee is required" }),
  industry: z.string({ required_error: "Industry is required" }),
  dateFounded: z.date({ required_error: "dateFounded is required" }),
  techStack: z
    .string({ required_error: "Tech Stack is required" })
    .array()
    .nonempty({ message: "Tech Stack must be at least 1 data" }),
  description: z.string({ required_error: "Description is required" }),
});

export const socialMediaFormSchema = z.object({
  facebook: z.string({ required_error: "Facebook link is required" }),
  instagram: z.string({ required_error: "Instagram link is required" }),
  linkedin: z.string({ required_error: "LinkedIn link is required" }),
  twitter: z.string({ required_error: "Twitter link is required" }),
  youtube: z.string({ required_error: "Youtube link is required" }),
});

export const teamFormSchema = z.object({
  name: z.string({ required_error: "Name is required" }),
  position: z.string({ required_error: "Position is required" }),
  instagram: z.string({ required_error: "Instagram is required" }),
  linkedin: z.string({ required_error: "Linkedin is required" }),
});

export const signInFormSchema = z.object({
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Email is not valid" }),
  password: z.string({ required_error: "Password is required" }),
});

export const signUpFormSchema = z.object({
  name: z.string({ required_error: "Name is required" }),
  email: z
    .string({ required_error: "Email is required" })
    .email({ message: "Email is not valid" }),
  password: z.string({ required_error: "Password is required" }),
});
