# This is just a helper to shorten the Docker command

CONTAINER_NAME := css-room-escape

init:
	@echo "List of commands:"
	@echo "build"
	@echo "up"
	@echo "down"
	@echo "exec"
	@echo "restart"
	@echo "\nusage:"
	@echo "make <command>"

build:
	@echo "Building container..."
	docker compose build
	@echo "Build complete"

up:
	@echo "Starting container..."
	docker compose up -d
	@echo "Container started"

down:
	@echo "Stopping container..."
	docker compose stop
	docker compose rm --force
	@echo "Container stopped"

exec:
	@echo "Entering the container shell..."
	docker exec -it ${CONTAINER_NAME} sh

restart:
	@echo "Restarting the container..."
	make down
	make up
	@echo "Container restarted"

rebuild:
	@echo "Rebuilding the container..."
	make down
	make build
	@echo "Rebuilding finished"
