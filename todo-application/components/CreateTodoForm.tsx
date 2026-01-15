'use client';

import { useAppDispatch } from "@/hooks";
import { createTask } from "@/redux/tasks/operations";
import { CreateTaskType } from "@/types/tasks";
import { ErrorMessage, Field, Form, Formik, FormikHelpers } from "formik";
import { useRouter } from "next/navigation";
import { useId } from "react";
import toast from "react-hot-toast";
import * as Yup from 'yup';
import CustomButton from "./CustomButton";

const createTodoValidationSchema = Yup.object().shape({
    title: Yup.string().min(2, 'Title is too short').max(150, 'Title is too long').required('Required!'),
    description: Yup.string().min(5, 'Title is too short').max(300, 'Title is too long').required('Required!'),
    done: Yup.boolean(),
    priority: Yup.number().min(1, 'You can set priority from 1 - to 10').max(10, 'You can set priority from 1 - to 10'),
});

const initialValues: CreateTaskType = {
    title: '', 
    description: '',
    done: false,
    priority: 1,
}

export default function CreateTodoForm() {
    const dispatch = useAppDispatch();
    const router = useRouter();

    const titleField = useId();
    const descField = useId();
    const doneField = useId();
    const priorityField = useId();

    const handleSubmit = async (values: CreateTaskType, actions: FormikHelpers<CreateTaskType>) => {
        try {
            dispatch(createTask(values));
            toast.success('Task was added!');
            router.push("/tasks");
        } catch (err) {
            toast.error('Something went wrong...');
        }
    }

    return (
        <div className="flex justify-center items-center min-h-[calc(100vh-100px)] px-4 mb-10">

            <div className="relative w-full max-w-lg">
                <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-indigo-500 to-pink-500 blur opacity-30" />
                
                <div className="relative rounded-3xl bg-[#111827] p-8 shadow-2xl border border-white/10">
                    <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-indigo-400 to-pink-400 bg-clip-text text-transparent">
                        Create New Task
                    </h2>

                    <Formik
                        initialValues={initialValues}
                        validationSchema={createTodoValidationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ errors, touched }) => (
                            <Form className="flex flex-col gap-6">

                                <div className="flex flex-col gap-2">
                                    <label htmlFor={titleField} className="text-sm font-medium text-white/80 ml-1">Title</label>
                                    <Field
                                        className={`w-full bg-white/5 border ${touched.title && errors.title ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition text-white`}
                                        name="title"
                                        placeholder="What needs to be done?"
                                        id={titleField}
                                    />
                                    <ErrorMessage name="title" component="span" className="text-xs text-red-400 ml-1" />
                                </div>

                                <div className="flex flex-col gap-2">
                                    <label htmlFor={descField} className="text-sm font-medium text-white/80 ml-1">Description</label>
                                    <Field
                                        as="textarea"
                                        rows="3"
                                        className={`w-full bg-white/5 border ${touched.description && errors.description ? 'border-red-500' : 'border-white/10'} rounded-xl px-4 py-3 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition text-white resize-none`}
                                        name="description"
                                        placeholder="Add some details..."
                                        id={descField}
                                    />
                                    <ErrorMessage name="description" component="span" className="text-xs text-red-400 ml-1" />
                                </div>

                                <div className="grid grid-cols-2 gap-4">

                                    <div className="flex flex-col gap-2">
                                        <label htmlFor={priorityField} className="text-sm font-medium text-white/80 ml-1">Priority (1-10)</label>
                                        <Field
                                            type="number"
                                            className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition text-white"
                                            name="priority"
                                            id={priorityField}
                                        />
                                        <ErrorMessage name="priority" component="span" className="text-xs text-red-400 ml-1" />
                                    </div>

                                    <div className="flex flex-col justify-center items-start gap-2 pt-6">
                                        <label className="flex items-center gap-3 cursor-pointer group">
                                            <div className="relative">
                                                <Field
                                                    type="checkbox"
                                                    name="done"
                                                    id={doneField}
                                                    className="peer sr-only"
                                                />
                                                <div className="w-6 h-6 border-2 border-white/20 rounded-md bg-white/5 peer-checked:bg-indigo-500 peer-checked:border-indigo-500 transition-all flex items-center justify-center">
                                                    <svg className="w-4 h-4 text-white opacity-0 peer-checked:opacity-100 transition-opacity" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <span className="text-sm font-medium text-white/80 group-hover:text-white transition">Completed?</span>
                                        </label>
                                    </div>
                                </div>

                                <CustomButton/>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
}
