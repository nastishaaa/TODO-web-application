type Props = {
    params: Promise<{ id: string }> 
}

export default async function TaskPage({ params }: Props) {
    const { id } = await params;
    return (
        <div>TaskPage - {id} </div>
    );
}
