pipeline {
    agent any

    tools {
        nodejs 'nodejs'
    }

    stages {
        stage('Instalação das dependencias') {
            steps {
                echo 'Instalando os pacotes node...'
                sh 'npm install'
            }
        }

        stage('Execução dos testes') {
            steps {
                echo 'Executando os testes...'
                sh 'npm test'
            }
        }
    }

    post {
        success {
            echo 'Build e testes executados com sucesso'
        }
        failure {
            echo 'Falha na execução do pipeline'
        }
    }




}