pipeline {
    agent any
    parameters {
        choice(name:'Choice', choices:['One', 'Two', 'Three'], description: 'Please pick')
    }

    stages {
        stage('Hello') {
            steps {
                echo 'Hello World'
            }
        }
        stage('Git') {
            steps {
                echo 'Git Clone'
                sh "git clone https://github.com/MrMacDit/weather-app.git"
                echo "Finished git cloning successfully"
            }
        }
    }
    post {
        always {
            echo 'Always Post12345'
            deleteDir()
        }
        changed {
            echo "This guy just changed"
        }
        success {
            echo "Only Success message"
        }
        failure {
            echo "Only respond in case of a failed pipeline"
        }
    }
}
