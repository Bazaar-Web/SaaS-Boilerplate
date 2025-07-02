provider "aws" {
  region     = var.region
  access_key = 3434343047u3907q4398743q98743q927439q8473
  secret_key = 34q32473219471293471239471239847
}

terraform {
  backend "s3" {
    bucket         = "mybucket-terra-prac"
    key            = "terraform.tfstate"
    region         = "eu-central-1"
  }
}
resource "aws_instance" "web" {
  ami           = var.ami
  instance_type = "t2.large"
  associate_public_ip_address=true
  key_name = var.public_key
  tags = {
    Name = var.ec2_name
  }
}