import {LayoutProps} from "@/types/LayoutProps";
import {useDevice} from "@/common-components/Wrapper/use-device";

const DeviceProvider = (props: LayoutProps) => {
    const {children} = props;
    useDevice();

    return (
        <div>
            {children}
        </div>
    )
}

export default DeviceProvider;