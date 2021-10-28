import {useState} from "react";

const ListItem = ({name, items}) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div style={{marginLeft: 30}}>
            <div
                className={'title'}
                onClick={() => setIsOpen(!isOpen)}>
                {name}
            </div>
            {
                isOpen && <div>
                    {items && items.map(({id, name, items}) => {
                        return (
                            <ListItem
                                key={id}
                                name={name}
                                items={items}/>
                        )
                    })}
                </div>
            }
        </div>
    )
}

export default ListItem;
