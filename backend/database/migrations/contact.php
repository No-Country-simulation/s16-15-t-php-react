use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void {
        Schema::create('contract', function (Blueprint $table) {
            $table->id();
            $table->unsignedInteger('client_id');
            $table->unsignedInteger('freelancer_id');
            $table->decimal('presupuesto', 10, 2);
            $table->date('fecha_limite');
            $table->text('detalles');
            $table->timestamps();
        });
    }

    public function down(): void {
        Schema::dropIfExists('contract');
    }
};
