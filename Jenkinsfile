pipeline {
    agent any

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
            echo 'Always Post and clear folder'
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
