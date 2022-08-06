#set( $functionName = $FILE_NAME.replaceAll(".tsx$", ""))
import React, { FunctionComponent } from 'react';

interface Props
{
    #[[$propsTypes$]]#
}

const $functionName: FunctionComponent<Props> = ({#[[$props$]]#}) =>
{
    #[[$END$]]#

    return <>

    </>;
};

export default $functionName;