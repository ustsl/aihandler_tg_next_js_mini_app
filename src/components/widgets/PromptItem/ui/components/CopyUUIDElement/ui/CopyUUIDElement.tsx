import React from 'react';
import { CopyBlockContainer } from '@/components/shared/CopyBlockContainer';

export const CopyUUIDElement = ({ uuid }: { uuid: string }) => {

    return (
        <CopyBlockContainer textToCopy={uuid}>
            <p>
                {uuid}
            </p>
        </CopyBlockContainer>

    )
};
