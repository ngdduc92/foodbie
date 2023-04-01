pipeline {
    agent any

    stages {
        environment {
            def env = readJSON file: 'jenkinsEnv.json'
            version = "${env.version}"
        }
        stage('Build') {
            steps {
                sh "docker build -t foobbie:${version} ."
                echo 'Build successfully'
            }
        }
        stage('Deploy') {
            steps {
                sh "docker run -p 3000:3000 foobbie-deploy:${version} ."
                echo 'Start successfully'
            }
        }
    }
}
