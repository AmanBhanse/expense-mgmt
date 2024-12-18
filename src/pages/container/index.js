import { Expenses } from "../expenses";
import { Header } from "../header";
import { SideBar } from "../sidebar";

export const Container = () => {
    return (
        <section className="overflow-x-hidden vh-100 d-flex flex-column">
            <Header />
            <div className="flex-grow-1">
                <div className="container-fluid h-100">
                    <div className="row h-100">
                        <div className="col-3 p-0">
                            <SideBar />
                        </div>
                        <div className="col-9">
                            <Expenses />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
