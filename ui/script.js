window.onload = () => {
    if (window.go_backend_xu_ly) {
        window.go_backend_xu_ly("init").then(res => {
            console.log("Backend response:", res);
        });
    } else {
        console.error("go_backend_xu_ly is not defined.");
    }
};
