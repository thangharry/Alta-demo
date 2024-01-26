import BanGhiHeader from "../components/BanGhiHeader";
import BanGhuBody from "../components/BanGhuBody";

function KhoBanGhi() {
    return (
        <div
            style={{
                backgroundColor: "#1E1E2E",
                minHeight: "calc(100% - 85px)",
                paddingLeft: "3rem",
            }}
        >
            <BanGhiHeader />
            <BanGhuBody />
        </div>
    );
}

export default KhoBanGhi;
