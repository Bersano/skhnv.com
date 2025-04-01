tech_stack = {
    "python": false,
    "java": false,
    "scala": false,
    "haskell": false,
    "pytorch": false,
    "tensorflow": false,
    "keras": false,
    "xgboost": false,
    "catboost": false,
    "lightgbm": false,
    "scikit_learn": false,
    "mlflow": false,
    "optuna": false,
    "jupyter": false,
    "pandas": false,
    "numpy": false,
    "scipy": false,
    "docker": false,
    "flask": false,
    "streamlit": false,
    "sqlalchemy": false,
    "matplotlib": false,
    "altair": false,
    "plotly": false,
    "spring_boot": false,
    "play_framework": false,
    "lombok": false,
    "jts_topology_suite": false,
    "thymeleaf": false,
    "spring_security": false,
    "jpa": false,
    "hibernate": false
}

let b_python = document.getElementById("button_python");
b_python.addEventListener("click", () => button_clicked(b_python));

let b_java = document.getElementById("button_java");
b_java.addEventListener("click", () => button_clicked(b_java));

let b_scala = document.getElementById("button_scala");
b_scala.addEventListener("click", () => button_clicked(b_scala));

let b_haskell = document.getElementById("button_haskell");
b_haskell.addEventListener("click", () => button_clicked(b_haskell));

let b_pytorch = document.getElementById("button_pytorch");
b_pytorch.addEventListener("click", () => button_clicked(b_pytorch));

let b_tensorflow = document.getElementById("button_tensorflow");
b_tensorflow.addEventListener("click", () => button_clicked(b_tensorflow));

let b_keras = document.getElementById("button_keras");
b_keras.addEventListener("click", () => button_clicked(b_keras));

let b_xgboost = document.getElementById("button_xgboost");
b_xgboost.addEventListener("click", () => button_clicked(b_xgboost));

let b_catboost = document.getElementById("button_catboost");
b_catboost.addEventListener("click", () => button_clicked(b_catboost));

let b_lightgbm = document.getElementById("button_lightgbm");
b_lightgbm.addEventListener("click", () => button_clicked(b_lightgbm));

let b_scikit_learn = document.getElementById("button_scikit_learn");
b_scikit_learn.addEventListener("click", () => button_clicked(b_scikit_learn));

let b_mlflow = document.getElementById("button_mlflow");
b_mlflow.addEventListener("click", () => button_clicked(b_mlflow));

let b_optuna = document.getElementById("button_optuna");
b_optuna.addEventListener("click", () => button_clicked(b_optuna));

let b_jupyter = document.getElementById("button_jupyter");
b_jupyter.addEventListener("click", () => button_clicked(b_jupyter));

let b_pandas = document.getElementById("button_pandas");
b_pandas.addEventListener("click", () => button_clicked(b_pandas));

let b_numpy = document.getElementById("button_numpy");
b_numpy.addEventListener("click", () => button_clicked(b_numpy));

let b_scipy = document.getElementById("button_scipy");
b_scipy.addEventListener("click", () => button_clicked(b_scipy));

let b_docker = document.getElementById("button_docker");
b_docker.addEventListener("click", () => button_clicked(b_docker));

let b_oracle_cloud_infrastructure = document.getElementById("button_oracle_cloud_infrastructure");
b_oracle_cloud_infrastructure.addEventListener("click", () => button_clicked(b_oracle_cloud_infrastructure));

let b_microsoft_azure = document.getElementById("button_microsoft_azure");
b_microsoft_azure.addEventListener("click", () => button_clicked(b_microsoft_azure));

let b_flask = document.getElementById("button_flask");
b_flask.addEventListener("click", () => button_clicked(b_flask));

let b_streamlit = document.getElementById("button_streamlit");
b_streamlit.addEventListener("click", () => button_clicked(b_streamlit));

let b_sqlalchemy = document.getElementById("button_sqlalchemy");
b_sqlalchemy.addEventListener("click", () => button_clicked(b_sqlalchemy));

let b_matplotlib = document.getElementById("button_matplotlib");
b_matplotlib.addEventListener("click", () => button_clicked(b_matplotlib));

let b_altair = document.getElementById("button_altair");
b_altair.addEventListener("click", () => button_clicked(b_altair));

let b_plotly = document.getElementById("button_plotly");
b_plotly.addEventListener("click", () => button_clicked(b_plotly));

let b_spring_boot = document.getElementById("button_spring_boot");
b_spring_boot.addEventListener("click", () => button_clicked(b_spring_boot));

let b_play_framework = document.getElementById("button_play_framework");
b_play_framework.addEventListener("click", () => button_clicked(b_play_framework));

let b_lombok = document.getElementById("button_lombok");
b_lombok.addEventListener("click", () => button_clicked(b_lombok));

let b_jts_topology_suite = document.getElementById("button_jts_topology_suite");
b_jts_topology_suite.addEventListener("click", () => button_clicked(b_jts_topology_suite));

let b_thymeleaf = document.getElementById("button_thymeleaf");
b_thymeleaf.addEventListener("click", () => button_clicked(b_thymeleaf));

let b_spring_security = document.getElementById("button_spring_security");
b_spring_security.addEventListener("click", () => button_clicked(b_spring_security));

let b_jpa = document.getElementById("button_jpa");
b_jpa.addEventListener("click", () => button_clicked(b_jpa));

let b_hibernate = document.getElementById("button_hibernate");
b_hibernate.addEventListener("click", () => button_clicked(b_hibernate));

function button_clicked(element) {

    const value = element.id.substring(7);
    const tech_stack_keys = Object.keys(tech_stack);

    const resetPoint = document.querySelectorAll('[data-name~="resetPoint"]');
    for (let i = 0; i < resetPoint.length; i++) {
        resetPoint[i].classList.add('text-secondary');
        resetPoint[i].classList.add('text-opacity-25');
        resetPoint[i].children.namedItem('skills').hidden = true;
    }

    if (tech_stack[value] !== true) {
        for (let i = 0; i < tech_stack_keys.length; i++) {
            tech_stack[tech_stack_keys[i]] = false;
            document.getElementById('button_' + tech_stack_keys[i]).classList.remove('btn-outline-light');
        }

        tech_stack[value] = true;
        element.classList.add('btn-outline-light');

        const currentHashTag = document.querySelectorAll('[data-name~=' + value + ']');
        for (let i = 0; i < currentHashTag.length; i++) {
            currentHashTag[i].classList.remove('text-secondary');
            currentHashTag[i].classList.remove('text-opacity-25');
            currentHashTag[i].children.namedItem('skills').hidden = false;
        }

    } else {

        for (let i = 0; i < tech_stack_keys.length; i++) {
            tech_stack[tech_stack_keys[i]] = false;
            document.getElementById('button_' + tech_stack_keys[i]).classList.remove('btn-outline-light');
        }

        for (let i = 0; i < resetPoint.length; i++) {
            resetPoint[i].classList.remove('text-secondary');
            resetPoint[i].classList.remove('text-opacity-25');
            resetPoint[i].children.namedItem('skills').hidden = true;
        }
    }

    if (Object.values(tech_stack).includes(true)) {
        console.log(tech_stack_keys.filter(x => tech_stack[x] === true));
    }

}
