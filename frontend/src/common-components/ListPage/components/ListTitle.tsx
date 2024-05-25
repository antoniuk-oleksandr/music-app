type ListTitleProps = {
    title: string;
}

const ListTitle = (props: ListTitleProps) => {
    const { title} = props;

    return (
        <h2 className={"text-3xl mb-4 font-bold select-text"}>{title}</h2>
    )
}

export default ListTitle;