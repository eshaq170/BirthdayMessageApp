pipeline {
    agent any
    tools {
        nodejs 'NodeJS' // Use the NodeJS configuration from Jenkins
    }
    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/eshaq170/BirthdayMessageApp.git'
            }
        }
        stage('Install Dependencies') {
            steps {
                sh 'npm install'
            }
        }
        stage('Run Tests') {
            steps {
                sh 'npm test'
            }
        }
        stage('Build Application') {
            steps {
                echo 'No build step defined for this project.'
            }
        }
        stage('Deploy Application') {
            steps {
                sh '''
                docker build -t birthday-app .
                docker run -d -p 3000:3000 birthday-app
                '''
            }
        }
    }
    post {
        success {
            echo 'Pipeline completed successfully!'
        }
        failure {
            echo 'Pipeline failed.'
        }
    }
}
