import React from 'react'
import { Card, ButtonGroup, ButtonIcon } from 'react-rainbow-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileAlt, faPlus, faEdit, faAngleDown } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
    return (
        <Card
            icon={<FontAwesomeIcon icon={faFileAlt} size="lg" />}
            title="markITdown"
            actions={
                <ButtonGroup>
                    <ButtonIcon variant="border" icon={<FontAwesomeIcon icon={faPlus} />} />
                    <ButtonIcon variant="border" icon={<FontAwesomeIcon icon={faEdit} />} />
                    <ButtonIcon
                        variant="border"
                        icon={<FontAwesomeIcon icon={faAngleDown} />}
                    />
                </ButtonGroup>
            }
            style={{elevation: '0', borderRadius: '0', backgroundColor: '#D6D7D8'}}
        />
    )
}
