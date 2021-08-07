import React from 'react'

function ListItem() {
    return (
        < div >
            {
                icon ?
                    <div style={{ flexDirection: 'row', margin: 20 }}>
                        <Avatar.Icon size={24} icon={icon} />

                        <div style={{ marginLeft: 30 }}>
                            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 18 }}>{title}</Text>
                            <Text style={{ color: 'grey', fontSize: 14 }}>{description}</Text>
                        </div>
                    </div>
                    :
                    <div style={{ margin: 5 }}>
                        <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 18 }}>{title}</Text>
                        <Text style={{ color: 'grey', fontSize: 14 }}>{description}</Text>
                    </div>
            }
        </div >
    )
}

export default ListItem
