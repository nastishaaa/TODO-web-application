import TaskDetails from "@/components/TaskDetails";

type Props = {
    params: Promise<{ id: string }> 
}

export default async function TaskPage({ params }: Props) {
    const { id } = await params;

    return (
        <div>
            <TaskDetails id={id}/>
        </div>
    );
}
