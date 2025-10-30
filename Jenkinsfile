pipeline {
    agent any

    tools {
        nodejs 'nodejs'
    }

    stages {
        stage('Instalação das dependencias') {
            steps {
                sh 'npm install'
            }
        }

        stage('Execução dos testes') {
            steps {
                sh 'npm test'
            }
        }
    }




}