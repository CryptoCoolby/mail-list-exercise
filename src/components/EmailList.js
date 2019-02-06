import React from 'react'
import EmailListItem from './EmailListItem'


const EmailList = ({items}) => {    
    return (
        <div>
            {
                items.map((item, i) => {
                    return (
                        <EmailListItem {...item} key={i} />
                    )
                })
            }
        </div>
    )


}
export default EmailList